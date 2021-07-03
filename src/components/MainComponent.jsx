import React from 'react'
import ItemBox from './itemBox/ItemBox';
import Raththi from '../Images/raththi2.jpg'

class MainComponent  extends React.Component {
    
   
    render() { 
        return (
        <div style={{display:'flex'}} >
          <ItemBox   title=" Raththi "  price = "450.00" des = "Raththi is the best milk powder"       image = {Raththi}/>   
          <ItemBox   title=" Higland "  price = "500.00" des = "Higland is the best milk powder"       image = {Raththi}/>  
          <ItemBox   title=" Palawatta "  price = "450.00" des = "Palawaththa is the best milk powder" image = {Raththi}/>  
          <ItemBox   title=" Viva "  price = "350.00" des = "Viva is the best milk powder"             image = {Raththi}/>  
          <ItemBox   title=" Nestomalt"  price = "650.00" des = "Nestomolt is the best milk powder"   image = {Raththi}/>          
        
        </div>
        );
    }
}
 
export default MainComponent ;