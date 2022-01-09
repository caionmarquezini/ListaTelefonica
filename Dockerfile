FROM openjdk:11-bullseye
ADD target/spring-boot-docker.jar /web/spring-boot-docker.jar
ADD target/dockscript.sh dockscript.sh
COPY ReactFrontListaTefonica-main/ /web/
RUN apt-get update -y
RUN apt-get install -y npm locales
RUN rm -rf /var/lib/apt/lists/* && localedef -i pt_BR -c -f UTF-8 -A /usr/share/locale/locale.alias pt_BR.UTF-8
ENV LANG pt_BR.utf8
WORKDIR /web
ENTRYPOINT ["sh","/dockscript.sh"]
EXPOSE 8080
EXPOSE 3000
