import logoPic from './logoPic.png'
import profileImage from './Ellipse 5.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Aside />
        <Section />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className='logo'>
      <div className='logoDiv' style={{ width: '20rem' }}>
        <img src={logoPic} alt='company logo' style={{ margin: '10px 35px' }} />
      </div>
      <div className='profileSection'>
        <div className='adminProfile' style={{ display: "flex", gap: '15px', alignItems: 'center' }}>
          <img src={profileImage} alt='profile image' />
          <div><h4>Obinna Festus <i class="fa-solid fa-angle-down"></i></h4>
            <p>Admin</p></div>
        </div>
      </div>
    </header>
  )
}


function Aside() {
  return (
    <aside>
      <div className='buttons'>
        <button>Data Managemant</button>
        <button>Content Managemant System(CMS)</button>
        <button>User Managemant</button>
      </div>
      <button className='logout'><i className="fa-solid fa-house"></i> Log out</button>
    </aside>
  )
}


function Section() {
  return (
    <section className='section'>
      <section className='sub-section'>
        <div style={{ margin: '10px 0px' }}>
          <h1 style={{ marginBottom: '5px', fontSize:'27px'}}>Add Company</h1>
          <p style={{fontSize:'19px'}}>Add Company you Want to check incides</p>
        </div>
        <div className='input' style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          <label for='text'><h3>Company Name*</h3></label>
          <input type='text' placeholder='Company Name here' id='text' style={{width:'100%', height:'60px', borderRadius:'10px',paddingLeft:'14px',fontSize:'17px',borderColor:'#dedede'}}/>
        </div>
        <div className='dropdown' style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          <label for='select'><h3>Industry*</h3></label>
          <select id='select' style={{width:'100%',height:'60px',paddingLeft:'14px',fontSize:'17px',color:'#757575',borderRadius:'10px',borderColor:'#dedede'}}>
            <option>Energy</option>
          </select>
        </div>
        <div className='textarea' style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          <label for='select'><h3>Add Bio*</h3></label>
          <textarea id='select' style={{width:'100%',height:'290px',paddingLeft:'14px',fontSize:'17px',color:'#757575',borderRadius:'10px',borderColor:'#dedede'}}></textarea>
        </div>
        <div className='buttons2'>
          <button className='save'>Save</button>
          <button className='del'>Delete</button>
        </div>
      </section>
       
      
    </section>
  )
}





export default App;
