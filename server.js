import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import crypto from 'crypto';

const app=express();
app.use(helmet()); app.use(cors()); app.use(express.json());
const PORT=process.env.PORT||8787;
const CLIENT_ORIGIN=process.env.CLIENT_ORIGIN||'*';
const consents=new Map();

app.get('/health',(req,res)=>res.json({ok:true,service:'ReActiva Driver API',time:new Date().toISOString()}));
app.get('/api/integrations',(req,res)=>res.json({
  rappi:{status:'not_configured',auth:'official_oauth_or_api_required'},
  picap:{status:'not_configured',auth:'official_oauth_or_api_required'}
}));
app.post('/api/consent',(req,res)=>{
  const {userId,platform,version,purpose}=req.body||{};
  if(!userId||!['rappi','picap'].includes(platform)||!version||!purpose) return res.status(400).json({error:'Datos de consentimiento incompletos'});
  const id=crypto.randomUUID(); const record={id,userId,platform,version,purpose,acceptedAt:new Date().toISOString(),ipHash:crypto.createHash('sha256').update(req.ip||'').digest('hex')};
  consents.set(id,record); res.status(201).json({ok:true,consentId:id,acceptedAt:record.acceptedAt});
});
app.post('/api/revoke',(req,res)=>{
  const {consentId}=req.body||{}; if(!consentId) return res.status(400).json({error:'consentId requerido'});
  const record=consents.get(consentId); if(record) {record.revokedAt=new Date().toISOString(); consents.set(consentId,record);}
  res.json({ok:true,revokedAt:new Date().toISOString()});
});
app.get('/api/oauth/:platform/start',(req,res)=>{
  const p=req.params.platform; if(!['rappi','picap'].includes(p)) return res.status(404).json({error:'Plataforma no soportada'});
  res.status(501).json({error:'INTEGRATION_NOT_CONFIGURED',message:`No existe una credencial OAuth/API autorizada para ${p}. Configura la integración oficial antes de habilitar acceso a datos.`});
});
app.listen(PORT,()=>console.log(`ReActiva API listening on ${PORT}`));
