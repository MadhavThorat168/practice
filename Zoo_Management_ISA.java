package isa_relationship;

		class Animal2 {

		    void eat() {
		        System.out.println("Animal eats food");
		    }
		}

		class Lion2 extends Animal2 {

		    void roar() {
		        System.out.println("Lion roars");
		    }
		}

		public class Zoo_Management_ISA {
			public static void main(String[] args) {

		        Lion2 l = new Lion2();

		        l.eat();
		        l.roar();
		    }
			
		}

