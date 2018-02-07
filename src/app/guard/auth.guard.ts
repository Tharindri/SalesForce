import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('isLoggedIn')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}


@Injectable()
export class AdminHrGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('userType')=== 'Admin' || localStorage.getItem('userType')==='HR' ) {
            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}


@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate() {
        if (localStorage.getItem('userType')=== 'Admin') {
            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}


@Injectable()
export class AdminFinanceGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('userType')=== 'Admin' ||localStorage.getItem('userType')=== 'Finance' ) {
            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}

