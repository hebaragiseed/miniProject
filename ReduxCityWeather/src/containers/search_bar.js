import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: ''
    }
    //constructor 안에 bind를 해줍니다.
    //이 라인이 의미하는 것은 검색바의 인스턴스가 onInputChange함수를 가지고요
    //이 함수를 검색바와 바인딩하는데 이는 onInputCange를 대체하죠
    //기존 함수를 가지고 바인딩하여, 기존에 있는 함수를 대체한 것이죠 
    //일종의 메소드를 오버라이딩 한 것 같은데요
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  //이벤트 핸들러로 전달해서 호출하면 이 값은 검색 컴포넌트나 검색바, 리액트 컴포넌트도 아니고 알지 못할 컨텍스트인 겁니다.
  //콜백함수가 전달되면 이 콜백이 참조하는 것은 이 안의 this 입니다.
  //그런데 이건 부정확한 미스터리한 컨택스트가 되는거죠 그래서 이렇게 전달한 것을 실행 시키면  
  //Cannot read property 'setState' of undefined 오류남, this가 실제 컴포넌트가 아니니까요
  //이를 고치기 위해 화살표 함수를 이용했던것과 다른 방번을 써야 합니다.
  //constructor 안에 bind를 해줍니다.
  onInputChange(event) {
    this.setState({
      term: event.target.value      
    });    
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }
  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group" >
        <input 
          type="text"
          className="form-control"
          palaceholder="당신의 좋아하는 미국도시의 5일 동안의 날씨를 검색해보세요"
          value={this.state.term}
          //콜백으로 함수전달하면 컨택스트와 바인딩할 필요가 있음
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">submit</button>
        </span>
        
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   return (
//     city: weatherReducer
//   );
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)