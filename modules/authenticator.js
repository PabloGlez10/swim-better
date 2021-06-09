const jwt = require('jsonwebtoken')
const config = require('./config')

module.exports = function authenticator(requiredSession, allowedProfiles = []) {

  return async (req, res, next) => {
    const token = req.token
    req.tokeData = null

    if(!token && !requiredSession){
      next()
      return
    }

    try{
      if(token) {
        req.tokeData = await jwt.verify(token, config.APP_SECRET)
      }

      if(requiredSession && allowedProfiles.indexOf(req.tokenData.profile) === -1){
        res.status(403).json({ message: 'No tienes permisos suficientes para llamar a este metodo.'})
        return
      }

      next()
    } catch (error){
      res.status(500).json({ message: error.message})
      return
    }
  }
}
