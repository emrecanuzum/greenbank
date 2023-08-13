export default function handler(req, res) {
    res.status(200).json({
         performance: '3s',
         clients: '643',
         transactions: '+142K',
         funds: '+123M'
        });    
  }