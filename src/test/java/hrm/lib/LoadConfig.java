package hrm.lib;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import com.google.common.base.Strings;

public class LoadConfig {
	private static Properties CONFIG = null;
	static String fseparator = File.separator;

	public static Properties loading_config_sys(String fileName) throws IOException {
		FileInputStream fs = null;
		try {
			fs = new FileInputStream(System.getProperty("user.dir") + fseparator + fileName);
			CONFIG = new Properties();
			CONFIG.load(fs);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return CONFIG;
	}

	public static String get_config_value(String config) {
		String configVal = "";
		try {
			CONFIG = LoadConfig.loading_config_sys("serenity.properties");
			configVal = System.getProperty(config);
			if (Strings.isNullOrEmpty(configVal)) {
				configVal = CONFIG.getProperty(config);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return configVal;
	}
}
