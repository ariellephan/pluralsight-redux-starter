import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // this.state = {
    //   course: {title: ""}
    // };
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
    // this.onClickDelete = this.onClickDelete.bind(this);
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }

  // onClickSave(){
  //   this.props.actions.createCourse(this.state.course);
  // }
  //
  // onClickDelete(event) {
  //   const key = event.target.dataset.key;
  //   this.props.actions.deleteCourse(key);
  //   console.log(this.props.courses);
  // }

  courseRow(callback, course, index) {
    //debugger;
    return <div key={index}>{course.title} <button data-key={index} onClick={callback}>Remove</button></div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    //debugger;
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
          <CourseList courses={courses}/>
      </div>
    );
  }
}

//Fix dispatch, courses missing in props validation
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  //debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //Wrap all actions in courseActions in call to dispatch
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//export default CoursesPage;
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
