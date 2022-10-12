const Entity = require("../models/Tasks");

// entity/
exports.browse = (req, res) =>
  Entity.find()
    .then(items => {
      const available = items.filter(item => !item.deletedAt);

      var { page, maxPage } = req.query;
      page = Number(page);
      maxPage = Number(maxPage);

      let totalPages = 1;
      if (available.length > 0) {
        totalPages = Math.floor(available.length / maxPage);
        if (available.length % maxPage > 0) totalPages += 1;
      }

      const array = available.slice(
        (page - 1) * maxPage,
        maxPage + (page - 1) * maxPage
      );

      res.json({
        array,
        totalPages,
      });
    })
    .catch(error => res.status(400).json({ error: error.message }));

// entity/save
exports.save = (req, res) =>
  Entity.create(req.body)
    .then(item => res.json(item))
    .catch(error => res.status(400).json({ error: error.message }));

// entity/:id/update
exports.update = (req, res) =>
  Entity.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(item => res.json(item))
    .catch(error => res.status(400).json({ error: error.message }));

// entity/:id/destroy
exports.destroy = (req, res) =>
  Entity.findByIdAndUpdate(req.params.id, {
    deletedAt: new Date().toLocaleString(),
  })
    .then(() => res.json(req.params.id))
    .catch(error => res.status(400).json({ error: error.message }));
