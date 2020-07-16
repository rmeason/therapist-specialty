const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Providers collection and inserts the providers below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const providerSeed = [
    {
        "id": 1,
        "image": "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/46463281_10214979410291261_3484175537503469568_o.jpg?_nc_cat=107&_nc_sid=174925&_nc_oc=AQl5AD6kC6_Hlqn7y5lMJ4IZnInjEAxZ1T-dpjqE3_26rc10yEYzjFMF1iFmUdJ5Qgw&_nc_ht=scontent.fhou1-2.fna&oh=61eecc573cd66af9371dea4abe3b48ae&oe=5F354946",
        "name": "Jack",
        "specialties": "Anxiety",
        "contact": "000-000-0000",
        "location": "Houston, Tx",
        "matrix": [1, 3, 2]
    },
    {
        "id": 2,
        "image": "https://scontent.fhou1-1.fna.fbcdn.net/v/t1.0-9/29496198_10213314143980644_5546547137153597440_o.jpg?_nc_cat=101&_nc_sid=174925&_nc_oc=AQnCmbWgqg29LaTNDv05Du_NtGTLnUZL5rl_bRo_RW6ja6cdoqO_kd-6CyR0JaeNxs0&_nc_ht=scontent.fhou1-1.fna&oh=a0be6137f4a94c59de54e28e49e9f2a3&oe=5F33BA02",
        "name": "Linda",
        "specialties": "Depression",
        "contact": "000-000-0000",
        "location": "Houston, Tx",
        "matrix": [4, 5, 1]
    },
    {
        "id": 3,
        "image": "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/10409525_10202986792803319_4518829450200931832_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_oc=AQkE_bV2JjFEaj9AmURA28cvoioBUw58z5a2pYvh_Er_kZBaD-OL4dq1O2jibonUNK4&_nc_ht=scontent.fhou1-2.fna&oh=1145453835ed10a3aa0c5082cc87c635&oe=5F34018E",
        "name": "Maria",
        "specialties": "Depression",
        "contact": "000-000-0000",
        "location": "Houston, Tx",
        "matrix": [3, 1, 4]
    },
    {
        "id": 4,
        "image": "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/78836230_10217729261715828_6328941306328383488_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_oc=AQlkucoPmcSXBeFVZZK2uSMSCV8I_LUgLrE4UvgyMXdHwoqGIgSOVV7ROgGenfTrANo&_nc_ht=scontent.fhou1-2.fna&oh=4184fda66dfdbaf36709a3e9ad559a8e&oe=5F3678FF",
        "name": "Luke",
        "specialties": "Anxiety",
        "contact": "000-000-0000",
        "location": "Houston, Tx",
        "matrix": [5, 2, 3]
    }
];

db.Provider
  .remove({})
  .then(() => db.Provider.collection.insertMany(providerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });