FROM ubuntu:latest
RUN echo "Hello World" > test.txt
CMD ["cat", "test.txt"]
