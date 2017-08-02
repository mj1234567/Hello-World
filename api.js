//After line no. 158

api.get('/me', function(req, res) {
  res.json(req.decoded);
}
