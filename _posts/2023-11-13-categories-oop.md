---
title: "[AI Tech] 객체 지향 프로그래밍이란"
excerpt: "객체 지향 프로그래밍의 의미와 특성에 대해 공부해보자"

categories:
  - cs
tags:
  - [cs, oop, java, python]

permalink: /cs/oop/

toc: true
toc_sticky: true

date: 2023-11-13
last_modified_at: 2023-11-13
---

## 객체 지향 프로그래밍이란..
### 객체 지향 프로그래밍(Object-Oriented Programming)

프로그래밍에서 필요한 데이터를 추상화시켜 상태와 행위를 가진 객체를 만들어 객체간의 유기적인 상호작용을 통해 로직을 구성하는 방법

## 절차지향 vs 객체지향

![image](https://github.com/ChangZero/ChangZero.github.io/assets/97018869/d76d86f1-1404-4e8b-9d2e-697208207a84)

[자료 출처] **[UsefulToKnow](https://usefultoknow.tistory.com/entry/%EC%A0%88%EC%B0%A8%EC%A7%80%ED%96%A5Procedural-Programming-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5Object-Oriented-Programming-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EB%B0%8F-%EC%B0%A8%EC%9D%B4%EC%A0%90) Blog**

### 절차지향(Procedural Programming)

- 순차적인 처리
- 장점: 빠른 실행 속도
- 단점: 유지보수 어렵다
- ex) C 언어

### 객체지향

- 클래스를 이용해 처리(메소드) 및 데이터(변수)을 객체(인스턴스)로 생성하여 사용
- 장점: 유지 보수가 쉬움, 코드 재사용 용이성
- 단점: 느린 개발 속도, 실행 속도, 용량 문제
- ex) JAVA, Python

## 객체 지향의 특성

### 1. 캡슐화(Encapsulation)

객체의 데이터를 외부에서 직접 접근하지 못하게 막는 특성 → 정보 은닉

**Java: 접근제한자**

1. **`public`:**
    - 어떤 클래스에서든 접근 가능합니다.
    - 예시: **`public class MyClass { }`**
2. **`protected`:**
    - 동일한 패키지 내의 클래스 또는 해당 클래스를 상속받은 하위 클래스에서 접근 가능합니다.
    - 예시: **`protected int myVariable;`**
3. **`default` (package-private):**
    - 아무런 접근 제한자를 명시하지 않은 경우, 해당 멤버는 기본적으로 패키지 내에서만 접근 가능합니다.
    - 예시: **`int myVariable;`**
4. **`private`:**
    - 동일한 클래스 내에서만 접근 가능합니다.
    - 예시: **`private String myMethod() { }`**

**python**

모든 것은 public이지만 사용자는 신뢰할 수 있다고 가정한다…

1. **`_` (Single Underscore):**
    - 보호된 멤버를 나타내기 위해 사용됩니다. 외부에서 직접 접근하지 않는 것이 좋은 멤버에 사용하지만, 외부에서 접근가능하긴함.
    
    ```python
    class MyClass:
        def __init__(self):
            self._protected_variable = 10
    
    obj = MyClass()
    print(obj._protected_variable)  # 접근은 가능하지만 접근하지 않는 게 좋다...
    ```
    
2. **`__` (Double Underscore):**
    - 이름이 두 개의 언더스코어로 시작되는 경우, 이름 맹글링(Name Mangling)이 발생하여 해당 클래스 외부에서 직접 접근하기 어렵게 만듭니다.
    
    ```python
    class MyClass:
        def __init__(self):
            self.__private_variable = 20
    
    obj = MyClass()
    # print(obj.__private_variable)  # 에러 발생
    print(obj._MyClass__private_variable)  # 접근은 가능하지만 권장되지 않음
    ```
    
3. **`property` 데코레이터:**
    - **`property`** 데코레이터를 사용하여 getter와 setter를 정의함으로써 간접적으로 접근을 제어할 수 있습니다. 데코레이터를 사용하면 메소드를 변수처럼 호출 가능
    
    ```python
    class MyClass:
        def __init__(self):
            self._value = 30
    
        @property
        def value(self):
            return self._value
    
        @value.setter
        def value(self, new_value):
            if new_value >= 0:
                self._value = new_value
            else:
                print("값은 음수가 될 수 없습니다.")
    
    obj = MyClass()
    print(obj.value)  # getter 호출
    obj.value = 40    # setter 호출
    ```
    

### 2.  상속(Inheritance)

상위 개체의 속성이 하위 개체에 상속되어, 하위 개체가 상위 개체의 속성을 모두 가지는 특성

- python
    
    ```python
    # 부모 클래스 정의
    class Animal:
        def __init__(self, name):
            self.name = name
    
        def speak(self):
            pass
    
    # 자식 클래스 정의 (상속)
    class Dog(Animal):
        def speak(self):
            return f"{self.name} says Woof!"
    
    # 자식 클래스 정의 (상속)
    class Cat(Animal):
        def speak(self):
            return f"{self.name} says Meow!"
    
    # 객체 생성 및 사용
    dog = Dog("Buddy")
    cat = Cat("Whiskers")
    
    print(dog.speak())  # 출력: Buddy says Woof!
    print(cat.speak())  # 출력: Whiskers says Meow!
    ```
    
- Java
    
    ```java
    // 부모 클래스 정의
    class Animal {
        String name;
    
        public Animal(String name) {
            this.name = name;
        }
    
        void speak() {
            // 메서드 내용 생략
        }
    }
    
    // 자식 클래스 정의 (상속)
    class Dog extends Animal {
        public Dog(String name) {
            super(name);
        }
    
        @Override
        void speak() {
            System.out.println(name + " says Woof!");
        }
    }
    
    // 자식 클래스 정의 (상속)
    class Cat extends Animal {
        public Cat(String name) {
            super(name);
        }
    
        @Override
        void speak() {
            System.out.println(name + " says Meow!");
        }
    }
    
    // 메인 클래스
    public class Main {
        public static void main(String[] args) {
            // 객체 생성 및 사용
            Dog dog = new Dog("Buddy");
            Cat cat = new Cat("Whiskers");
    
            dog.speak();  // 출력: Buddy says Woof!
            cat.speak();  // 출력: Whiskers says Meow!
        }
    }
    ```
    

### 3. 다양성(Polymorphism)

같은 이름의 메소드가 클래스 혹은 객체에 따라 다르게 구현되는 특성

**오버라이딩(Overriding)**

부모 클래스에서 상속받은 자식 클래스에서 부모 클래스에서 만들어진 메소드를 커스터마이징해서 사용하는 것

- python
    
    ```python
    class Animal:
        def speak(self):
            return "동물이 소리를 낸다."
    
    class Dog(Animal):
        def speak(self):
            return "강아지가 멍멍 짖는다."
    
    class Cat(Animal):
        def speak(self):
            return "고양이가 야옹 울어요."
    
    # 객체 생성 및 사용
    animal = Animal()
    dog = Dog()
    cat = Cat()
    
    print(animal.speak())  # 출력: 동물이 소리를 낸다.
    print(dog.speak())     # 출력: 강아지가 멍멍 짖는다.
    print(cat.speak())     # 출력: 고양이가 야옹 울어요.
    ```
    
- Java
    
    ```java
    // 부모 클래스
    class Animal {
        String speak() {
            return "동물이 소리를 낸다.";
        }
    }
    
    // 자식 클래스
    class Dog extends Animal {
        @Override
        String speak() {
            return "강아지가 멍멍 짖는다.";
        }
    }
    
    // 자식 클래스
    class Cat extends Animal {
        @Override
        String speak() {
            return "고양이가 야옹 울어요.";
        }
    }
    
    // 메인 클래스
    public class Main {
        public static void main(String[] args) {
            // 객체 생성 및 사용
            Animal animal = new Animal();
            Dog dog = new Dog();
            Cat cat = new Cat();
    
            System.out.println(animal.speak());  // 출력: 동물이 소리를 낸다.
            System.out.println(dog.speak());     // 출력: 강아지가 멍멍 짖는다.
            System.out.println(cat.speak());     // 출력: 고양이가 야옹 울어요.
        }
    }
    ```
    

**오버로딩(Overloading)**

같은 이름의 메소드를 사용하지만 메개변수의 타입이나 개수를 다르게 주어 다른 용도로 사용하는 것

파이썬은 메서드 오버로딩을 따로 지원하지 않음

- Java
    
    ```python
    // 부모 클래스
    class Animal {
        String speak() {
            return "동물이 소리를 낸다.";
        }
    }
    
    // 자식 클래스
    class Dog extends Animal {
        @Override
        String speak() {
            return "강아지가 멍멍 짖는다.";
        }
    }
    
    // 자식 클래스
    class Cat extends Animal {
        @Override
        String speak() {
            return "고양이가 야옹 울어요.";
        }
    }
    
    // 메인 클래스
    public class Main {
        public static void main(String[] args) {
            // 객체 생성 및 사용
            Animal animal = new Animal();
            Dog dog = new Dog();
            Cat cat = new Cat();
    
            System.out.println(animal.speak());  // 출력: 동물이 소리를 낸다.
            System.out.println(dog.speak());     // 출력: 강아지가 멍멍 짖는다.
            System.out.println(cat.speak());     // 출력: 고양이가 야옹 울어요.
        }
    }
    ```
    

### 3. 추상화(Abstraction)

데이터나 프로세스 등을 의미가 비슷한 개념이나 표현으로 정의해나가는 과정 + 각 객체의 구현에 대한 상세함은 감춤

**추상 클래스**

추상클래스란 하나 이상의 구현 내용이 없고 메소드 목록만 가진 클래스이며, 자식클래스에서 해당 추상 메소드를 반드시 구현하도록 강제한다

- python
    
    ```python
    from abc import ABC, abstractmethod
    
    # 추상 클래스 정의
    class Shape(ABC):
        @abstractmethod
        def area(self):
            pass
    
    # 추상 클래스를 상속받는 구체적인 클래스 정의
    class Circle(Shape):
        def __init__(self, radius):
            self.radius = radius
    
        def area(self):
            return 3.14 * self.radius * self.radius
    
    class Rectangle(Shape):
        def __init__(self, width, height):
            self.width = width
            self.height = height
    
        def area(self):
            return self.width * self.height
    
    # 객체 생성 및 사용
    circle = Circle(5)
    rectangle = Rectangle(4, 6)
    
    print("원의 면적:", circle.area())        # 출력: 원의 면적: 78.5
    print("직사각형의 면적:", rectangle.area())  # 출력: 직사각형의 면적: 24
    ```
    
- Java
    
    ```java
    // 추상 클래스 정의
    abstract class Shape {
        // 추상 메서드 정의
        abstract double area();
    }
    
    // 추상 클래스를 상속받는 구체적인 클래스 정의
    class Circle extends Shape {
        private double radius;
    
        public Circle(double radius) {
            this.radius = radius;
        }
    
        @Override
        double area() {
            return 3.14 * radius * radius;
        }
    }
    
    class Rectangle extends Shape {
        private double width;
        private double height;
    
        public Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }
    
        @Override
        double area() {
            return width * height;
        }
    }
    
    // 메인 클래스
    public class Main {
        public static void main(String[] args) {
            // 객체 생성 및 사용
            Circle circle = new Circle(5);
            Rectangle rectangle = new Rectangle(4, 6);
    
            System.out.println("원의 면적: " + circle.area());        // 출력: 원의 면적: 78.5
            System.out.println("직사각형의 면적: " + rectangle.area());  // 출력: 직사각형의 면적: 24.0
        }
    }
    ```
    

**인터페이스**

클래스와 달리 멤버 변수(속성)를 가질 수 없으며, 추상 메서드와 상수만을 가집니다.

파이썬은 인터페이스를 지원하지 않음

- Java
    
    ```java
    // 인터페이스 정의
    interface Shape {
        double area();  // 추상 메서드
    }
    
    // 인터페이스를 구현하는 클래스 정의
    class Circle implements Shape {
        private double radius;
    
        public Circle(double radius) {
            this.radius = radius;
        }
    
        @Override
        public double area() {
            return 3.14 * radius * radius;
        }
    }
    
    class Rectangle implements Shape {
        private double width;
        private double height;
    
        public Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }
    
        @Override
        public double area() {
            return width * height;
        }
    }
    
    // 메인 클래스
    public class Main {
        public static void main(String[] args) {
            // 인터페이스를 구현하는 객체 생성 및 사용
            Shape circle = new Circle(5);
            Shape rectangle = new Rectangle(4, 6);
    
            System.out.println("원의 면적: " + circle.area());        // 출력: 원의 면적: 78.5
            System.out.println("직사각형의 면적: " + rectangle.area());  // 출력: 직사각형의 면적: 24.0
        }
    }
    ```
