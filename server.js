const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
