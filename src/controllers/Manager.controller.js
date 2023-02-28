const ManagerService = require('../services/Manager.service')

const getManagers = (async (req,res)=>{

    const results = await ManagerService.getManagers()
    console.log('controller',results);
    res.send({data:results})

}) 

module.exports={
    getManagers
}