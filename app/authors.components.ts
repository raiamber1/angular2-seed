/**
 * Created by rai.amber on 7/4/2016.
 */

import {AuthorService} from './authors.service'
import {Component} from 'angular2/core'
@Component({
    selector: 'authors',
    template: `<h2> new authors </h2>
    <ul>
    <li *ngFor="#author of authors">{{author}}</li>
    </ul>`,
    providers:[AuthorService]

})
export class AuthorsComponent{
    title = "hello dude";
    authors
    constructor(authorService:AuthorService){
        this.authors = authorService.getAuthors();
    }
}