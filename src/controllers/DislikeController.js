const DevModel = require('../models/Dev');

const Controller = {
  async store(req, res) {
    const { user } = req.headers;
    const { id } = req.params;

    const loggedDev = await DevModel.findById(user);
    const targetDev = await DevModel.findById(id);

    if (!targetDev) return res.status(404).json({error: 'Dev not found'})
  
    loggedDev.dislikes.push(id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
}

module.exports = Controller;