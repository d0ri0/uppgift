import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Example from '../components/Example'
import ProductItem from '../components/ProductItem';
import {
  loadCartSummary,
  loadProducts,
  // getDummyPosts,
  addToCart
} from '../actions/api';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardColumns,
  Button
} from 'reactstrap';

// const productItem = item => {
//     return (
//         <Col sm="4" className="mb-4" key={item.id}>
//             <Card>
//                 <CardImg top width="100%" src="https://via.placeholder.com/150" alt="Card image cap" />
//                 <CardBody>
//                     <CardTitle>Card title</CardTitle>
//                     <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//                     Pris: 200kr
//                     <br />
//                     Antal: <button>-</button> <input type="tel" name="amount" size="2" value="1" style={{ textAlign: 'center' }} /> <button>+</button>
//                     <br />
//                     <br />
//                     <Button>Lägg i varukorg</Button>
//                 </CardBody>
//             </Card>
//         </Col>
//     );
// }

class Page extends Component {
  static propTypes = {
    loadCartSummary: PropTypes.func.isRequired
    // data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    // this.props.loadProducts();
    // this.props.addToCart({
    //     productName : 'namn här'
    // });
  }

  addToCart = product => {
    console.log(product);
  };

  render() {
    // console.log(this.props.data);
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="display-3 text-center">Alla våra produkter</h1>
          </Col>
        </Row>

        <CardColumns>
          {this.props.data.map(item => (
            <ProductItem
              key={item.Id}
              item={item}
              onAddToCart={product => this.addToCart(product)}
            />
          ))}
        </CardColumns>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.api.data
  // data2: state.api.data2
});

export default connect(
  mapStateToProps,
  {
    loadCartSummary,
    loadProducts,
    // getDummyPosts,
    addToCart
  }
)(Page);
