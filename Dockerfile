FROM maven:3.6.1-jdk-8-slim AS build
RUN mkdir -p workspace
WORKDIR workspace
COPY backend/pom.xml /workspace
COPY backend/src /workspace/src
COPY frontend /workspace/frontend
RUN mvn -f pom.xml clean install -DskipTests=true


FROM openjdk:8-alpine
COPY --from=build /workspace/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
