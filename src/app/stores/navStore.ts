import { makeAutoObservable, runInAction } from "mobx";

export default class NavStore{
    isMenuVisiable = false;
    navTitle = 'Register Card Form';

    constructor(){
       makeAutoObservable(this)
    }

    toggleMenu = (title:string)=> {
        runInAction(()=>{
        this.setIsVisible();
        this.setTittle(title);
        })    
    }

    setIsVisible() {this.isMenuVisiable = !this.isMenuVisiable;}
    setTittle(title:string) {this.navTitle = title;}

}