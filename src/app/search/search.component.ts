import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
 
 constructor(private router:ActivatedRoute,private route:Router){}
 
 searchItem:string="";
  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['searchItem'])
      this.searchItem=params['searchItem']
    })
  }
   search(){
     if(this.searchItem){
      this.route.navigateByUrl('/search/'+ this.searchItem)
     }
   }
}
