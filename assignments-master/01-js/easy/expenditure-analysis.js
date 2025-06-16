/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let answer=[];
  const cat=[];
  let m=0;
  for(let i=0;i<transactions.length;i++){
      if(cat.indexOf(transactions[i].category)==-1){
        cat[m]=transactions[i].category;
        m++;
      }
  }
  let k=0;
  let j;
  for(let i=0;i<cat.length;i++){
    let totalspent=0;
    for(j=0;j<transactions.length;j++){
      if(cat[i]==transactions[j].category){
          totalspent+=transactions[j].price;
      }
    }
    if(j==transactions.length){
      answer.push({category:cat[i],totalSpent:totalspent});
      k++;
    }
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
