import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Todogroup} from './todogroup';
import { Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public  user;
  constructor( private http: HttpClient,  public router: Router) {
  }

  Register(user) {
    this.http.post('http://mamadembele.fr:4500/signUp', user).subscribe(res => {
      console.log(res);
      this.router.navigate (['/Login']);
    });
  }

  ServiceCookieLogin(form) {
    window.localStorage.setItem('email', form.email);
    window.localStorage.setItem('password', form.password);
    console.log(form);
  }
  ServiceCookieOwner(userId) {
    window.localStorage.setItem('owner', userId);
  }
  onKeyUp(val) {
    setTimeout(function() {
      console.log(val);
    }, 500);
  }

  Login(user) {
    const data = {
      email: Object.values(user)[0],
      password : Object.values(user)[1]
    };
    console.log(data);
    this.http.post('http://mamadembele.fr:4500/signIn', data).subscribe(res => {
         console.log('le res', res);
         if (res) {
            this.TodoGroup(Object.values(user)[0]);
            this.onKeyUp(res);
            const utilisateur = window.localStorage.getItem('owner');
            console.log('utilisateur1', utilisateur);
            this.ServiceCookieLogin(data);
            this.router.navigate (['/TodoGroup', utilisateur]);
          }
    });

  }


  TodoGroup( email) {
      email = window.localStorage.getItem('email');
      console.log(email);
      this.http.get (`http://mamadembele.fr:4500/user/${email}`).subscribe(res => {
        console.log('le resultat', res[0]._id);
        this.ServiceCookieOwner(res[0]._id);

    });

  }

  AddToGroup(user) {
    const utilisateur = window.localStorage.getItem('owner');
    console.log('le owner', utilisateur);
    const data = {
      nom: user,
      owner: utilisateur
     };
    console.log('this user', data);
    this.http.post(`http://mamadembele.fr:4500/todoGroup/create/${utilisateur}`, data).subscribe( res => {
      console.log(res);
      window.location.reload(true);
    });
  }

  GetTodoGroup() {
    const utilisateur = window.localStorage.getItem('owner');
    console.log('le owner', utilisateur);
    return this.http.get(`http://mamadembele.fr:4500/user/todoGroups/${utilisateur}`).pipe(map((response: Response) =>{return response; }));
  }

  AddTache(user, group) {
    const utilisateur = window.localStorage.getItem('owner');
    console.log('le group', group);
    const data = {
      text: user
    };
    console.log('this user', data);
    this.http.post(`http://mamadembele.fr:4500/todo/create/${utilisateur}/${group}`, data).subscribe( res => {
      console.log(res);
      window.location.reload(true);
    });
  }

  GetTaches(group) {
    const utilisateur = window.localStorage.getItem('owner');
    console.log('le owner', utilisateur);
    return this.http.get(`http://mamadembele.fr:4500/todos/${group}`).pipe(map((response: Response) =>{return response; }));
  }

  Deconnexion() {
    window.localStorage.clear();
    console.log('le owner apres la deconnexion', window.localStorage.getItem('owner'));
    this.router.navigate (['/Login']);
  }

  Update(user, id) {

    const utilisateur = window.localStorage.getItem('owner');
    console.log('le ownerUpdate', utilisateur);
    const data = {
      nom: user,
      owner: utilisateur
    };
    console.log('this userUpdate', data);
    console.log('this id is', id);
    this.http.put(`http://mamadembele.fr:4500/todo/update/${id}`, data).subscribe(res => console.log('ikhanad',res));
  }

   Delete(id) {
      const utilisateur = window.localStorage.getItem('owner');
      this.http.delete(`http://mamadembele.fr:4500/todoGroup/delete/${id}`).subscribe(res => console.log(res));
      window.location.reload(true);

  }
}
