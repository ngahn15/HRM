package hrm.lib;

import java.awt.AWTException;
import java.awt.HeadlessException;
import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class TakeScreenshot {
	public void capture(String _dirPath, String _fileName) throws IOException, HeadlessException, AWTException {
		int markedIndex = getDuplicateFileCount(_dirPath, _fileName);
		BufferedImage image = new Robot()
				.createScreenCapture(new Rectangle(Toolkit.getDefaultToolkit().getScreenSize()));

		ImageIO.write(image, "png", new File(_dirPath + "/" + _fileName + "_" + markedIndex + ".png"));
	}

	public void deleteImageFiles(String _dirPath) {
		File directory = new File(_dirPath);
		File[] files = directory.listFiles();
		int fileCount = files.length;
		for (int i = 0; i < fileCount; i++) {
			files[i].delete();
		}
		if (fileCount > 0)
			System.out.println("[INFO] Delete " + fileCount + " image file(s)");
	}

	private int getDuplicateFileCount(String _dirPath, String _fileName) {
		int counter = 1;
		File directory = new File(_dirPath);
		
		//Check if folder exist or not
		if(!directory.exists()) {
			directory.mkdirs();
		}
		
		File[] files = directory.listFiles();
		for (int i = 0; i < files.length; i++) {
			if (files[i].getName().contains(_fileName)) {
				counter++;
			}
		}
		return counter;
	}
}
