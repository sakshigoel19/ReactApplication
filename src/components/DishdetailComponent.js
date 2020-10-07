import React, {Component} from 'react';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class DishDetail extends Component{
    constructor(props){
        super(props);
           {
                this.state= {
                }
        };
    }

    renderDish(dish) {
        if(dish != null) {
            return (

                <div className='col-12 col-md-5 m-1'>
                    <Card>
                   < CardImg width="100%" src={dish.image} alt={dish.name}/>
                               <CardBody>
                                 <CardTitle>{dish.name}</CardTitle>
                                 <CardText>{dish.description}</CardText>
                               </CardBody>
                    </Card>
                </div>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if(comments!=null) {
            return(
               
                comments.map((comment)=>{
                    return(
                        <ul key = {comment.id} className='list-unstyled'>
                            <li>
                                <div>{comment.comment}</div>
                    <div>--- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                            </li>
                        </ul>
                    )
                })
               
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    
    render(){
        const dish= this.props.dish
        if(dish==null){
            return(
                <div>
                </div>
            )
        }
        else{
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(dish)}
                        <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                       </div>
                    </div>
                </div>
            )
        }
    }
}

export default DishDetail;