console.log('hello')

let data = [
  {id:1,
    image: 'https://media.giphy.com/media/ITRemFlr5tS39AzQUL/giphy.gif',
    title: 'social scorecard event:<br/>argument and takeaways',
    start: '24 july 2023',
    status: 'stated : submitted',

  },
  {id:2,
    image: 'https://media.giphy.com/media/ITRemFlr5tS39AzQUL/giphy.gif',
    title: 'Happiness scorecard event:<br/>argument and takeaways',
    start: '22 july 2022',
    status: 'stated : submitted',

  },
  {id:3,
    image: 'https://media.giphy.com/media/ITRemFlr5tS39AzQUL/giphy.gif',
    title: 'unicorn behaviour scorecard event:<br/>argument and takeaways',
    start: '24 july 2023',
    status: 'stated : submitted',

  },
  {id:4,
    image: 'https://media.giphy.com/media/ITRemFlr5tS39AzQUL/giphy.gif',
    title: 'social scorecard event:<br/>argument and takeaways',
    start: '24 july 2023',
    status: 'stated : submitted',

  },
  {id:5,
    image: 'https://media.giphy.com/media/ITRemFlr5tS39AzQUL/giphy.gif',
    title: 'happiness scorecard event:<br/>argument and takeaways',
    start: '24 july 2023',
    status: 'stated : submitted',

  },
  {id:6,
    image: 'https://media.giphy.com/media/ITRemFlr5tS39AzQUL/giphy.gif',
    title: 'unicorn behaviour scorecard event:<br/>argument and takeaways',
    start: '24 july 2023',
    status: 'stated : submitted',

  },
  {id:7,
    image: 'https://media.giphy.com/media/ITRemFlr5tS39AzQUL/giphy.gif',
    title: 'social scorecard event:<br/>argument and takeaways',
    start: '24 july 2023',
    status: 'stated : submitted',

  },
  {id:8,
    image: 'https://media.giphy.com/media/ITRemFlr5tS39AzQUL/giphy.gif',
    title:'social scorecard event:<br/>argument and takeaways',
    start: '24 july 2023',
    status: 'stated : submitted',

  },
 
]
const container=document.querySelector('.card-container')

const displayItems=(data)=>{
const content = data
  .map((item) => {
    const { image, title, start, status } = item
    return `
     <div class="card">
            <img
              src=${image}
              alt=""
              class="card-img"
            />
            <div class="card-content">
              <h2>
                ${title}
              </h2>
              <p>${start}</p>
              <p>${status}</p>
            </div>
          </div>
    `
  })
  .join('')
container.innerHTML = content

}
displayItems(data);


searchInput.addEventListener('input',(e)=>{
  e.preventDefault();
  let value=e.target.value;
  console.log(value)
  let result=data.filter((item)=>{
    return item.title.startsWith(value)
  })

  if(result.length==0){
    container.innerHTML=`<h1>No Items found</h1>`
  }else{

    displayItems(result)
  }
})


