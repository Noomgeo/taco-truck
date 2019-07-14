import React from 'react';
import './Landing.css';
import './Carousel.css';

import { Carousel } from 'react-responsive-carousel';

class Landing extends React.Component {

	onChange = (...a)=> {
		console.log('onChange', a);
	}
	onClickItem = (...a)=> {
		console.log('onClickItem', a);
	}
	onClickThumb = (...a)=> {
		console.log('onClickThumb', a);
	}

	render() {
        return (
			<div className='Landing Page'>
	            <Carousel showArrows={true}
	            		  onChange={this.onChange}
	            		  onClickItem={this.onClickItem}
	            		  onClickThumb={this.onClickThumb}>
	                <div>
	                    <img src="https://images.unsplash.com/photo-1524412529635-a258ed66c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80" />
	                    <p className="legend">Option 1</p>
	                </div>
	                <div>
	                    <img src="https://images.unsplash.com/photo-1558985250-b1dbde2a467a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
	                    <p className="legend">Option 2</p>
	                </div>
	                <div>
	                    <img src="https://images.unsplash.com/photo-1561620141-343a829938de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=502&q=80" />
	                    <p className="legend">Option 3</p>
	                </div>
	                <div>
	                    <img src="https://images.unsplash.com/photo-1558985250-b1dbde2a467a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
	                    <p className="legend">Option 4</p>
	                </div>
	            </Carousel>
        	</div>
       	);
    }	
}

export default Landing;