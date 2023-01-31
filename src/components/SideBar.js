
import React from 'react';


function SideBar() {

    return (
       <div className='sideContainer'> 
       <div className='sideTop'>
       <div className="icon-div">
      <a href="https://github.com"style={{margin:'15px'}}>
        <i className="fab fa-github fa-3x" style={{color: 'grey'}} onMouseEnter={() => {document.querySelector('.fa-github').style.color = 'white'}} onMouseLeave={() => {document.querySelector('.fa-github').style.color = 'grey'}} />
      </a>
      <a href="https://linkedin.com"style={{margin:'15px'}}>
        <i className="fab fa-linkedin fa-3x" style={{color: 'grey'}} onMouseEnter={() => {document.querySelector('.fa-linkedin').style.color = 'white'}} onMouseLeave={() => {document.querySelector('.fa-linkedin').style.color = 'grey'}} />
      </a>
      <a href="https://stackoverflow.com" style={{margin:'15px'}}>
        <i className="fab fa-stack-overflow fa-3x" style={{color: 'grey'}} onMouseEnter={() => {document.querySelector('.fa-stack-overflow').style.color = 'white'}} onMouseLeave={() => {document.querySelector('.fa-stack-overflow').style.color = 'grey'}} />
      </a>
    </div>
  
       <h4 className='sideH4'> Music Interest </h4>
       <h5 className='sideH5' style={{textAlign:'center', color: 'white', fontWeight:'900'}}> House Full Of Time - Guitar </h5>
       <iframe alt='soundCloud Song Link' title='Music1' className="scFrame"  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kitsune_shoujo/guitar-house-full-of-time" scrolling="no" frameBorder="none"></iframe>
       <h5 className='sideH5' style={{textAlign:'center', color: 'white', fontWeight:'900',}}> Last Lines - BedHed </h5>
       <iframe alt='soundCloud Song Link'  title='Music2' className="scFrame"  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hellnitsu/last-lines-let-blood-let-live" scrolling="no" frameBorder="no"></iframe>
       <h5 className='sideH5'style={{textAlign:'center', color: 'white', fontWeight:'900'}}> Kitty Craft - Par5 </h5>
       <iframe alt='soundCloud Song Link'  title='Music3' className="scFrame"  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-575152577-54470328/kitty-craft-par-5" scrolling="no" frameBorder="no"></iframe>
       </div>
       <div className='sideBottom'><h4 className='sideH4'> Favorite Poem </h4> <h5 style={{ fontSize:'1rem', letterSpacing:'5px', color:'white'}}> BY EMILY BRONTË </h5><p className='sideToppie'> No coward soul is mine
No trembler in the world's storm-troubled sphere
I see Heaven's glories shine
And Faith shines equal arming me from Fear

O God within my breast
Almighty ever-present Deity
Life, that in me hast rest,
As I Undying Life, have power in Thee

Vain are the thousand creeds
That move men's hearts, unutterably vain,
Worthless as withered weeds
Or idlest froth amid the boundless main

To waken doubt in one
Holding so fast by thy infinity,
So surely anchored on
The steadfast rock of Immortality.

With wide-embracing love
Thy spirit animates eternal years
Pervades and broods above,
Changes, sustains, dissolves, creates and rears

Though earth and moon were gone
And suns and universes ceased to be
And Thou wert left alone
Every Existence would exist in thee

There is not room for Death
Nor atom that his might could render void
Since thou art Being and Breath
And what thou art may never be destroyed.</p>
</div>
</div>
       /* {<div style={{  display: 'flex', position:'relative'}}>
      
    </div>
       <div id='about3'className='homeJam'> <h3>My Goals  </h3><p className='homeJammie'>Phasellus fringilla eget ex et suscipit. Integer eu tellus erat. Nullam porttitor erat eget venenatis vehicula. Vivamus venenatis augue a libero condimentum volutpat. Aenean porttitor, arcu ut fringilla egestas, dui ex vulputate justo, ut lacinia libero purus sed nisl. Pellentesque sodales interdum tellus, et dapibus quam aliquam id. Nam non convallis elit. Praesent sodales vitae dolor nec congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

</p></div>
       
       </div> ]}*/
    );
}
export default SideBar;