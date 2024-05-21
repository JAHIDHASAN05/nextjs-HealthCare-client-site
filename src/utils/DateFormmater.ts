const DateFormmater = (value:string) => {

 const date= new Date(value)
 const year=date.getFullYear()
 const month= (date.getMonth()+1).toString().padStart(2,'0')
const day = date.getDate().toString().padStart(2,'0')

const formattedDate =`${year}-${month}-${day}`

  // Input date string
//   const inputDateStr = values;

//   // Split the string to get the month and day
//   const [, month, day] = inputDateStr.split(" ");

//   // Create a date string that JavaScript can parse (e.g., "May 21, 2024")
//   const dateStr = `${month} ${day}, 2024`;

//   // Create a new Date object
//   const date = new Date(dateStr);

//   // Format the date into YYYY-MM-DD
//   const formattedDate = date.toLocaleDateString("en-CA"); // en-CA locale formats date as YYYY-MM-DD

//   console.log(formattedDate); // Outputs: 2024-05-21

return formattedDate
};

export default DateFormmater;
