package hrm.lib;

/**
 * @author VinhTD
 * @version 20171225
 */
public class EXE {

	/**
	 * Call executive file then wait for exit code
	 * 
	 * @param args
	 * @return
	 */
	public static int callExe(String... args) {
		int exitCode = 1;
		try {
			System.out.println("***** INFO ***** Calling [" + args[0] + "]");
			Process process = Runtime.getRuntime().exec(args);
			exitCode = process.waitFor();
			System.out.println("***** INFO ***** EXIT CODE : " + exitCode);
		} catch (Exception e) {
			System.out.println("***** ERROR ***** Calling [" + args[0] + "] " + e.getMessage());
		}
		return exitCode;
	}
}
