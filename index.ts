// Import stylesheets
import './style.css';

// Write TypeScript code!
import { Person } from './person';

let me: Person = new Person();
me.firstname = 'Luis';
me.middlename = 'Eduardo';
me.lastname = 'Duarte';
me.age = 23;

me.emails.push('dut.dudu123@hotmailcom');
me.emails.push('tes@hotmail.com');

let sl: HTMLElement;
sl = document.getElementById('name');
sl.innerText = me.fullnm();

sl = document.getElementById('emails');
sl.innerText = me.emails.toString();

sl = document.getElementById('age');
sl.innerText = me.age.toString();

sl = document.getElementById('birthday');
sl.innerText = me.Birthday().toString();
