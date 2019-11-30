package hrm.lib;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.logging.FileHandler;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;
import java.util.Date;

public class Logging {
	private static final Logger logger = Logger.getLogger("MyLog");
	public static FileHandler fh;
	private static final Logger loggerFailure = Logger.getLogger("MyFailureLog");
	public static FileHandler fhFailure;

	public static void log(String logString) {
		try {
			// This block configure the logger with handler and formatter
			if (fh == null) {
				DateFormat dateFormat = new SimpleDateFormat("yyyy_MM_dd");
				Date date = new Date();
				String filePath = System.getProperty("user.dir") + dateFormat.format(date) + ".log";
				fh = new FileHandler(filePath, true);
				fh.setEncoding("UTF-8");
				logger.addHandler(fh);
				logger.setUseParentHandlers(false); // To remove the console handler
				SimpleFormatter formatter = new SimpleFormatter();
				fh.setFormatter(formatter);
			}
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		logger.info(logString);
	}

	public static void logFailure(String logString) {
		try {
			// This block configure the logger with handler and formatter
			if (fhFailure == null) {
				DateFormat dateFormat = new SimpleDateFormat("yyyy_MM_dd");
				Date date = new Date();
				String filePath = System.getProperty("user.dir") + "_FAILURE_" + dateFormat.format(date) + ".log";
				fhFailure = new FileHandler(filePath, true);
				fhFailure.setEncoding("UTF-8");
				loggerFailure.addHandler(fhFailure);
				loggerFailure.setUseParentHandlers(false); // To remove the console handler
				SimpleFormatter formatter = new SimpleFormatter();
				fhFailure.setFormatter(formatter);
			}
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		loggerFailure.info(logString);
	}
}
