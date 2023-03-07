import { Grid } 
    from '@mui/material';

import React,{useState} from 'react';

  

const arr=['Car','Bike']
  

  
export default function Park1() {
    
    
  const [ifoccupied,setifoccupied]=useState("vacant");
  const arr1 = ["green","red"];
    return (
      <div style={{margin:'0px',padding:'0px'}}>

        <Grid container spacing ={2} className='Car'>
          <Grid item xs={6} sm={3} ><h1 id='1' style={{backgroundColor:'green',padding:'90px 100px',textAlign:'center'}}>C1</h1></Grid>
          <Grid item xs={6} sm={3}><h1 id='2' style={{backgroundColor:'green',padding:'90px 100px',textAlign:'center'}}>C2</h1></Grid>
          <Grid item xs={6} sm={3}><h1 id='3' style={{backgroundColor:'green',padding:'90px 100px',textAlign:'center'}}>C3</h1></Grid>
          <Grid item xs={6} sm={3}><h1 id='4' style={{backgroundColor:`${arr1[1]}`,padding:'90px 100px',textAlign:'center'}}>C4</h1></Grid>
        
        </Grid>
        <Grid container spacing ={2} style={{marginLeft:"66px"}} className='Bike'>
          <Grid item xs={1} sm={1} ><h1 style={{backgroundColor:'green',padding:'90px 100px'}}> B1</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B2</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B3</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B4</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B5</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B6</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B7</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B8</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B9</h1></Grid>
          <Grid item xs={1} sm={1}><h1 style={{backgroundColor:'green',padding:'90px 100px'}}>B10</h1></Grid>
          
        
        </Grid>
        <Grid container spacing ={2} className='Car'>
          <Grid item xs={6} sm={3} ><h1 id='5' style={{backgroundColor:'green',padding:'90px 100px',textAlign:'center'}}>C5</h1></Grid>
          <Grid item xs={6} sm={3}><h1 id='6' style={{backgroundColor:'orange',padding:'90px 100px',textAlign:'center'}}>C6</h1></Grid>
          <Grid item xs={6} sm={3}><h1 id='7' style={{backgroundColor:'orange',padding:'90px 100px',textAlign:'center'}}>C7</h1></Grid>
          <Grid item xs={6} sm={3}><h1 id='8' style={{backgroundColor:'green',padding:'90px 100px',textAlign:'center'}}>C8</h1></Grid>
        
        </Grid>
        <p>{
          // if(arr[0]=='Car') 
        }</p>

        
      </div>
      
            
    );
}