plugins {
	java
	id("org.springframework.boot") version "3.0.2"
	id("io.spring.dependency-management") version "1.1.0"
}

group = "com.mysite"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_19

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation ("org.springframework.boot:spring-boot-starter-data-jpa")

	testImplementation("org.springframework.boot:spring-boot-starter-test")

	developmentOnly ("org.springframework.boot:spring-boot-devtools")

	compileOnly ("org.projectlombok:lombok")

	annotationProcessor ("org.projectlombok:lombok")

	runtimeOnly ("com.h2database:h2")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
