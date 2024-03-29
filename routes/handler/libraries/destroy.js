const fs = require("fs");
const { article } = require("../../../models/");

module.exports = async (req, res) => {
  const id = req.params.id;

  const getArticle = await article.findByPk(id);

  if (!getArticle) {
    return res
      .status(404)
      .json({ status: "error", message: "article not found" });
  }

  fs.unlink(`./public/${getArticle.thumbnail}`, async (err) => {
    if (err) {
      return res.status(400).json({ status: "error", message: err.message });
    }

    await getArticle.destroy();

    return res.json({
      status: "success",
      message: "article deleted",
    });
  });
};
