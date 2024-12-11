
#build
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

COPY pom.xml ./

RUN mvn dependency:go-offline -B

COPY src ./src

RUN mvn clean package -DskipTests

#run với openjdk

FROM openjdk:17-jdk-slim
COPY --from=build /app/target/*.jar app.jar

EXPOSE 5000

ENTRYPOINT ["java", "-jar", "/app.jar"]



