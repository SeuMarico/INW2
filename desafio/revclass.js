const leia = require("prompt-sync")()
class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }
    mostraIdade(){
        console.log(2023-this.anoNascimento)
    }
}
class aluno extends Pessoa {
    constructor(cpf,nome,anoNascimento,matricula,nota){
        super(cpf,nome,anoNascimento);
        this.matricula=matricula;
        this.nota=nota
    }
}

let p1= new aluno("111.222.333-44","Marcos",2008,"MAT01",0)
let p2=new aluno("222.111.333-44","Maria",2007,"MAT02",0)
let p3= new aluno("333.444.555-66","Pedro",2007,"MAT03",0)
let p4=new aluno("333.444.666-77","Paulo",2006,"MAT04",0)

console.log("matricula\tAluno\tNota")
console.log("_______________________________")
console.log(p1.matricula+"\t"+p1.nome+"\t"+p1.nota)
console.log(p2.matricula+"\t"+p2.nome+"\t"+p2.nota)
console.log(p3.matricula+"\t"+p3.nome+"\t"+p3.nota)
console.log(p4.matricula+"\t"+p4.nome+"\t"+p4.nota)
console.log("_______________________________")

console.log("Digite as notas")

console.log(p1.nome)
p1.nota=parseInt(leia("digite a nota do aluno: "))
console.log(p2.nome)
p2.nota=parseInt(leia("digite a nota do aluno: "))
console.log(p3.nome)
p3.nota=parseInt(leia("digite a nota do aluno: "))
console.log(p4.nome)
p4.nota=parseInt(leia("digite a nota do aluno: "))

console.log("\nmatricula\tAluno\tNota")
console.log("_______________________________")
console.log(p1.matricula+"\t"+p1.nome+"\t"+p1.nota)
console.log(p2.matricula+"\t"+p2.nome+"\t"+p2.nota)
console.log(p3.matricula+"\t"+p3.nome+"\t"+p3.nota)
console.log(p4.matricula+"\t"+p4.nome+"\t"+p4.nota)
console.log("_______________________________")
