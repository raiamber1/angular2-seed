/**
 * Created by rai.amber on 7/3/2016.
 */
import {CourseService} from './course.service'
    import {Component} from 'angular2/core'
@Component({
    selector: 'courses',
    template: `<h2> new courses </h2>
    <ul>
    <li *ngFor="#course of courses">{{course}}</li>
    </ul>`,
    providers:[CourseService]

})
export class CoursesComponent{
    title = "hello dude";
    courses
    constructor(courseService:CourseService){
        this.courses = courseService.getCourses();
    }
}