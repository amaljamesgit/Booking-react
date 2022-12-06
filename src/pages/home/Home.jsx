import Featured from "../../components/featured/Featured"
import MailList from "../../components/mailList/MailList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import PropertyList from "../../components/propertyList/PropertyList"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "../home/home.css"

const Home =()=>{
    return(
<div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle"> Browse by property type </h1>
        <PropertyList/>
        <h1 className="homeTitle"> Home guests love </h1>
        <FeaturedProperties/>
        <MailList/>
    </div>
</div>
    )
}

export default Home