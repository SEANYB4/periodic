
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import H from './InfoCards/H';
import L from './InfoCards/Li';
import { useNavigate } from 'react-router-dom';



let selected;
const handleClick = event => {
  event.target.classList.add("element2")
  if(selected){
    selected.classList.remove("element2")
  }
  selected = event.target;

};



function App() {

  
  return (



        <div className="App">


        <div className='header'>
            <h1>Periodic</h1>
            <p>Copyright Baincorp</p>

          

            <div className='key'>
              <h2 className='keyTitle'>Key</h2>
              <div className='keyList'>
                    <ul>
                        <li>Alkali metals <div className='code alkalimetals'></div></li>
                        <li>Alkaline-earth metals <div className='code alkalineearthmetals'></div></li>
                        <li>Transition metals <div className='code transition'></div></li>
                        <li>Other metals <div className='code othermetals'></div></li>
                        <li>Other nonmetals <div className='code othernonmetals'></div></li>
                    </ul>


                    <ul>
                        <li>Halogens <div className='code halogens'></div></li>
                        <li>Noble gases <div className='code noble'></div></li>
                        <li>Rare-earth elements and lanthanoid elements <div className='code rare'></div></li>
                        <li>Actinoid elements <div className='code actinoid'></div></li>
                    </ul>
              </div>
            
            </div>
        </div>




        <div className='ptable'>




          <div className='col1'>
                
          
                <Link to="/H" style={{textDecoration: 'none'}}> <div className='element othernonmetals' onClick={handleClick}>H
                <br></br></div></Link>
                
                
                <Link to="/L" style={{textDecoration: 'none'}}><div className='element alkalimetals' onClick={handleClick}>Li
                <br></br></div></Link>


                <div className='element alkalimetals' onClick={handleClick}>Na
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalimetals' onClick={handleClick}>K
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalimetals' onClick={handleClick}>Rb
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalimetals' onClick={handleClick}>Cs
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalimetals' onClick={handleClick}>Fr
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>



          <div className='col2'>

                <div className='element hide'></div>
                <div className='element alkalineearthmetals' onClick={handleClick}>Be
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalineearthmetals' onClick={handleClick}>Mg
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalineearthmetals' onClick={handleClick}>Ca
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalineearthmetals' onClick={handleClick}>Sr
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalineearthmetals' onClick={handleClick}>Ba
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element alkalineearthmetals' onClick={handleClick}>Ra
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>


          <div className='col3'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element rare' onClick={handleClick}>Sc<br></br>
                <Link to="/H">Click</Link></div>
                <div className='element rare' onClick={handleClick}>Y
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element rare' onClick={handleClick}>La
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element actinoid' onClick={handleClick}>Ac
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>


          <div className='col4'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition' onClick={handleClick}>Ti
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Zr
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Hf
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Rf
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>


          <div className='col5'>
        
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition' onClick={handleClick}>V
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Nb
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Ta
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Db
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>

          <div className='col6'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition' onClick={handleClick}>Cr
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Mo
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>W
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Sg
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>
          <div className='col7'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition' onClick={handleClick}>Mn
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Tc
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Re
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Bh
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>

          <div className='col8'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition' onClick={handleClick}>Fe
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Ru
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Os
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Hs
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>


          <div className='col9'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition' onClick={handleClick}>Co
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Rh
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Ir
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Mt
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>



          <div className='col10'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition' onClick={handleClick}>Ni
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Pd
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Pt
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Ds
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>


          <div className='col11'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition' onClick={handleClick}>Cu
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Ag
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Au
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Rg
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>



          <div className='col12'>

                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element hide'></div>
                <div className='element transition'>Zn
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Cd
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Hg
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element transition' onClick={handleClick}>Cn
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>



          <div className='col13'>
          
                <div className='element hide'></div>
                <div className='element othernonmetals' onClick={handleClick}>B
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' v>Al
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Ga
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>In
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Tl
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Nh
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>



          <div className='col14'>
        
                <div className='element hide'></div>
                <div className='element othernonmetals' onClick={handleClick}>C
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othernonmetals' onClick={handleClick}>Si
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Ge
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Sn
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Pb
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Fl
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>


          <div className='col15'>

                <div className='element hide'></div>
                <div className='element othernonmetals' onClick={handleClick}>N
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othernonmetals' onClick={handleClick}>P
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othernonmetals' onClick={handleClick}>As
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Sb
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Bi
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Mc
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>



          <div className='col16'>

                <div className='element hide'></div>
                <div className='element othernonmetals' onClick={handleClick}>O
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othernonmetals' onClick={handleClick}>S
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othernonmetals' onClick={handleClick}>Se
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othernonmetals' onClick={handleClick}>Te
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Po
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element othermetals' onClick={handleClick}>Lv
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>


          <div className='col17'>

                <div className='element hide'></div>
                <div className='element halogens' onClick={handleClick}>F
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element halogens' onClick={handleClick}>Cl
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element halogens' onClick={handleClick}>Br
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element halogens' onClick={handleClick}>I
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element halogens' onClick={handleClick}>At
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element halogens' onClick={handleClick}>Ts
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>


          <div className='col18'>

                <div className='element noble' onClick={handleClick}>He
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element noble' onClick={handleClick}>Ne
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element noble' onClick={handleClick}>Ar
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element noble' onClick={handleClick}>Kr
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element noble' onClick={handleClick}>Xe
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element noble' onClick={handleClick}>Rn
                <br></br>
                <Link to="/H">Click</Link></div>
                <div className='element noble' onClick={handleClick}>Og
                <br></br>
                <Link to="/H">Click</Link></div>
          </div>




        </div>


        <div className='info'>
          
          <Routes>
                <Route path='/H' element={<H />}/>
                <Route path='/L' element={<L />}/>



          </Routes>

        </div>

        </div>

   
  );
}

export default App;
