import React from 'react';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


  function RenderDish({dish}) {
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

   function  RenderComments({comments}) {
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
    // const dish= props.dish
        const DishDetail=(props)=>{


        if(props.dish==null){
            return(
                <div>
                </div>
            )
        }
        else{
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                            <RenderComments comments = {props.dish.comments}/>
                       </div>
                    </div>
                </div>
            )
        }
    }


export default DishDetail;