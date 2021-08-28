 import styles from '../styles/Eom.module.css'
const EOM=({employee})=>{
    console.log(employee);
    return(
        <div className='page-container' >
            <div className={styles.eomContainer}>
                <h1 className={styles.eomHeading} ><span className={styles.cyan}>Employee</span> Of the Month</h1>
                <div className={styles.info} >
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} alt={employee.name}/>
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps=async(context)=>{
    const response=await fetch(`https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`);
    const employee=await response.json();
    return{
        props:{
            employee,
        }
    }
}
export default EOM;