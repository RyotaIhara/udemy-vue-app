FROM httpd:2.4

# Apache のドキュメントルートに public フォルダの内容をコピー
COPY ./public/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd", "-D", "FOREGROUND"]
