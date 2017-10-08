package api.servlets;

import api.components.User;
import api.enums.WebStatus;
import api.managers.SessionManager;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by barakm on 07/10/2017
 */
@WebServlet(name = "LogoutServlet")
public class LogoutServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        SessionManager.removeUser(new User(request.getParameter("username"), WebStatus.LOBBY));
    }
}
