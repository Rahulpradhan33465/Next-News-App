import styles from '../../styles/Feed.module.css'
import {useRouter} from 'next/router'
const Feed=({articles,pageNumber})=>{
    const router=useRouter();
    return (
        <div className={styles.articleContainer}>
          {
              articles.map((article,index)=>{
                  return(
                      <div className={styles.card} key={index} >
                        {article.urlToImage ? <img src={article.urlToImage} alt={article.title} />:<img src='https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png' alt='image Not Found' />}
                       <div className={styles.info}>
                       <h1 className={styles.title} onClick={()=>window.location.href=article.url} >{article.title}</h1>
                        <p className={styles.desc}>{article.description}</p>
                            </div>
                      
                
                    </div>
                  )
              })
          }
          <div className={styles.pagination}>
              <div onClick={()=>{
                  if(pageNumber>1){
  router.push(`/feed/${pageNumber-1}`).then(()=>window.scrollTo(0,0))
                  }
              }}
              className={pageNumber===1? styles.disable:styles.active}
              >Previous Page</div>
              <div>#{pageNumber}</div>
              <div onClick={()=>{
                  if(pageNumber<5){
  router.push(`/feed/${pageNumber+1}`).then(()=>window.scrollTo(0,0))
                  }
              }}
              className={pageNumber===5? styles.disable:styles.active}
              >Next Page</div>
          </div>
        </div>
    )
}

export const getServerSideProps=async(context)=>{
    const pageNumber=context.query.pageId;
    if(!pageNumber || pageNumber<1 || pageNumber>5){
        return{
            props:{
                articles:[],
                pageNumber:1
            }
        }
    }
    
    const apiResponse=await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
        headers:{
            Authorization:`Bearer ${process.env.NEWS_API_KEY}`
        }
    })
   const data= await apiResponse.json();
 const {articles}=data;
 return{
     props:{
         articles,
         pageNumber:Number.parseInt(pageNumber)
     }
 }
}



export default Feed;