import React,{ Component } from "react";
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import Axios from "axios";
import { Row } from "reactstrap";

class landingPage extends Component{
    state={
        data:[],
        login:[]
    }

    componentDidMount(){
        Axios.get('http://localhost:2000/item')
        .then((res) => {
            this.setState({data:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderCard = () => {
        return this.state.data.map((val) => {
            return(
                <Card key={val.id} nama={val.namaItem} harga={val.hargaItem} gambar={val.gambarItem}/>
            )
        })
    }

    render(){
        return(
            <div>
                <div className="d-flex justify-content-center row carousel">
                    <Carousel/>
                </div>
                <hr/>
                <Row className="d-flex justify-content-around">
                    {this.renderCard()}
                </Row>
            </div>
        )
    }
}

export default landingPage;