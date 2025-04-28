# 1. Use an official Java runtime as a parent image
FROM openjdk:21-jdk-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the packaged jar file into the container
COPY target/employee-service-0.0.1-SNAPSHOT.jar app.jar

# 4. Expose the port Spring Boot uses
EXPOSE 8081

# 5. Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
