const DevModel = require('../models/Dev')


const Controller = {
  async store(req, res) {
    const { id } = req.params;
    const { user } = req.headers;

    const loggedDev = await DevModel.findById(user);
    const targetDev = await DevModel.findById(id);

    if (!targetDev) return res.status(404).json({error: 'Dev not found'});
    if (targetDev.likes.includes(user)) console.log('match');

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};

module.exports = Controller