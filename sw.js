const CACHE_NAME = 'v1_cache_el_Mago',
  urlsToCache = [
    './',
    './css/materialize.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    './css/styles.css',
    './js/materialize.min.js',
    './js/ui.js',
    './js/script.js',
    './img/elMago.png',
    './img/M-0001.png',
    './img/M-0002.png',
    './img/M-0003.png',
    './img/M-0004.png',
    './img/M-0005.png',
    './img/M-0006.png',
    './img/M-0008.png',
    './img/M-0009.png',
    './img/M-0010.png',
    './img/M-0011.png',
    './img/M-0012.png',
    './img/M-0013.png',
    './img/M-0014.png',
    './img/M-0015.png',
    './img/M-0016.png',
    './img/M-0018.png',
    './img/M-0019.png',
    './img/M-0020.png',
    './img/M-0021.png',
    './img/M-0022.png',
    './img/M-0023.png',
    './img/M-0024.png',
    './img/M-0026.png',
    './img/M-0027.png',
    './img/M-0028.png',
    './img/M-0029.png',
    './img/M-0030.png',
    './img/M-0031.png',
    './img/M-0032.png',
    './img/M-0033.png',
    './img/M-0034.png',
    './img/M-0035.png',
    './img/M-0036.png',
    './img/M-0038.png',
    './img/M-0039.png',
    './img/M-0040.png',
    './img/M-0041.png',
    './img/M-0042.png',
    './img/M-0043.png',
    './img/M-0045.png',
    './img/M-0046.png',
    './img/M-0048.png',
    './img/M-0049.png',
    './img/M-0050.png',
    './img/M-0051.png',
    './img/M-0053.png',
    './img/M-0054.png',
    './img/M-0055.png',
    './img/M-0056.png',
    './img/M-0057.png',
    './img/M-0058.png',
    './img/M-0059.png',
    './img/M-0060.png',
    './img/M-0061.png',
    './img/M-0062.png',
    './img/M-0063.png',
    './img/M-0064.png',
    './img/M-0065.png',
    './img/M-0067.png',
    './img/M-0068.png',
    './img/M-0069.png',
    './img/M-0071.png',
    './img/M-0072.png',
    './img/M-0073.png',
    './img/M-0074.png',
    './img/M-0075.png',
    './img/M-0077.png',
    './img/M-0078.png',
    './img/M-0079.png',
    './img/M-0080.png',
    './img/M-0081.png',
    './img/M-0082.png',
    './img/M-0083.png',
    './img/M-0084.png',
    './img/M-0085.png',
    './img/M-0087.png',
    './img/M-0090.png',
    './img/M-0091.png',
    './img/M-0094.png',
    './img/M-0095.png',
    './img/M-0096.png',
    './img/M-0097.png',
    './img/M-0098.png',
    './img/M-0100.png', 
    './img/M-0101.png',
    './img/M-0102.png',
    './img/M-0103.png',
    './img/M-0104.png',
    './img/M-0111.png',
    './img/M-0112.png',
    './img/M-0113.png',
    './img/M-0114.png',
    './img/M-0115.png',
    './img/M-0116.png',
    './img/M-0117.png',
    './img/M-0118.png',
    './img/M-0119.png',
    './img/M-0121.png',
    './img/M-0122.png',
    './img/M-0123.png',
    './img/M-0124.png',
    './img/M-0126.png',
    './img/M-0127.png',
    './img/M-0128.png',
    './img/M-0129.png',
    './img/M-0130.png',
    './img/M-0132.png',
    './img/M-0139.png',
    './img/M-0140.png',
    './img/M-0141.png',
    './img/M-0142.png',
    './img/M-0144.png',
    './img/M-0145.png',
    './img/M-0146.png',
    './img/M-0147.png',
    './img/M-0148.png',
    './img/M-0149.png',
    './img/M-0150.png',
    './img/M-0153.png',
    './img/M-0154.png',
    './img/M-0155.png',
    './img/M-0161.png',
    './img/M-0162.png',
    './img/M-0163.png',
    './img/M-0164.png',
    './img/M-0165.png',
    './img/M-0166.png',
    './img/M-0168.png',
    './img/M-0169.png',
    './img/M-0179.png',
    './img/M-0180.png',
    './img/M-0183.png',
    './img/M-0185.png',
    './img/M-0206.png',
    './img/M-0210.png',
    './img/M-0212.png',
    './img/M-0213.png',
    './img/M-0214.png',
    './img/M-0215.png',
    './img/M-0220.png',
    './img/M-0222.png',
    './img/M-0233.png',
    './img/M-0240.png',
    './img/M-0241.png',
    './img/M-0246.png',
    './img/M-0247.png',
    './img/M-0248.png',
    './img/M-0249.png',
    './img/M-0250.png',
    './img/M-0251.png',
    './img/M-0253.png',
    './img/M-0254.png',
    './img/M-0255.png',
    './img/M-0256.png',
    './img/M-0257.png',
    './img/M-0259.png',
    './img/M-0260.png',
    './img/M-0264.png',
    './img/M-0265.png',
    './img/M-0266.png',
    './img/M-0270.png',
    './img/M-0271.png',
    './img/M-0272.png',
    './img/M-0276.png',
    './img/M-0277.png',
    './img/M-0278.png',
    './img/M-0281.png',
    './img/M-0284.png',
    './img/M-0288.png',
    './img/M-0290.png',
    './img/M-0318.png',
    './img/M-0347.png',
    './img/M-0348.png',
    './img/M-0349.png',
    './img/M-0350.png',
    './img/M-0352.png',
    './img/M-0353.png',
    './img/M-0354.png',
    './img/M-0355.png',
    './img/M-0356.png',
    './img/M-0357.png',
    './img/M-0358.png',
    './img/M-0359.png',
    './img/M-0360.png',
    './img/M-0361.png',
    './img/M-0362.png',
    './img/M-0363.png',
    './img/M-0364.png',
    './img/M-0365.png',
    './img/M-0366.png',
    './img/M-0367.png',
    './img/M-0368.png',
    './img/M-0369.png',
    './img/M-0370.png',
    './img/M-0371.png',
    './img/M-0372.png',
    './img/M-0373.png',
    './img/M-0375.png',
    './img/M-0376.png',
    './img/M-0377.png',
    './img/M-0378.png',
    './img/M-0380.png',
    './img/M-0381.png',
    './img/M-0383.png',
    './img/M-0387.png',
    './img/M-0388.png',
    './img/M-0389.png',
    './img/M-0392.png',
    './img/M-0393.png',
    './img/M-0394.png',
    './img/M-0396.png',
    './img/M-0397.png',
    './img/M-0398.png',
    './img/M-0399.png',
    './img/M-0400.png',
    './img/M-0401.png',
    './img/M-0402.png',
    './img/M-0403.png',
    './img/M-0404.png',
    './img/M-0405.png',
    './img/M-0406.png',
    './img/M-0407.png',
    './img/M-0409.png',
    './img/M-0410.png',
    './img/M-0419.png',
    './img/M-0420.png',
    './img/M-0421.png',
    './img/M-0427.png',
    './img/M-0428.png',
    './img/M-0430.png',
    './img/M-0433.png',
    './img/M-0434.png',
    './img/M-0435.png',
    './img/M-0436.png',
    './img/M-0437.png',
    './img/M-0438.png',
    './img/M-0448.png',
    './img/M-0449.png',
    './img/M-0450.png',
    './img/M-0451.png',
    './img/M-0452.png',
    './img/M-0453.png',
    './img/M-0454.png',
    './img/M-0455.png',
    './img/M-0456.png',
    './img/M-0457.png',
    './img/M-0458.png',
    './img/M-0459.png',
    './img/M-0460.png',
    './img/M-0462.png',
    './img/M-0463.png',
    './img/M-0464.png',
    './img/M-0465.png',
    './img/M-0466.png',
    './img/M-0467.png',
    './img/M-0468.png',
    './img/M-0469.png',
    './img/M-0470.png',
    './img/M-0471.png',
    './img/M-0472.png',
    './img/M-0473.png',
    './img/M-0474.png',
    './img/M-0475.png',
    './img/M-0476.png',
    './img/M-0477.png',
    './img/M-0478.png',
    './img/M-0479.png',
    './img/M-0480.png',
    './img/M-0481.png',
    './img/M-0482.png',
    './img/M-0483.png',
    './img/M-0484.png',
    './img/M-0485.png',
    './img/M-0486.png',
    './img/M-0487.png',
    './img/M-0491.png',
    './img/M-0492.png',
    './img/M-0493.png',
    './img/M-0500.png',
    './img/M-0501.png',
    './img/M-0502.png',
    './img/M-0513.png',
    './img/M-0515.png',
    './img/M-0516.png',
    './img/M-0518.png',
    './img/M-0519.png',
    './img/M-0520.png',
    './img/M-0521.png',
    './img/M-0530.png',
    './img/M-0538.png',
    './img/M-0539.png',
    './img/M-0540.png',
    './img/M-0541.png',
    './img/M-0542.png',
    './img/M-0543.png',
    './img/M-0544.png',
    './img/M-0545.png',
    './img/M-0546.png',
    './img/M-0547.png',
    './img/M-0548.png',
    './img/M-0549.png',
    './img/M-0551.png',
    './img/M-0552.png',
    './img/M-0553.png',
    './img/M-0554.png',
    './img/M-0555.png',
    './img/M-0556.png',
    './img/M-0557.png',
    './img/M-0558.png',
    './img/M-0559.png',
    './img/M-0560.png',
    './img/M-0561.png',
    './img/M-0562.png',
    './img/M-0563.png',
    './img/M-0565.png',
    './img/M-0568.png',
    './img/M-0569.png',
    './img/M-0570.png',
    './img/M-0571.png',
    './img/M-0572.png',
    './img/M-0573.png',
    './img/M-0574.png',
    './img/M-0575.png',
    './img/M-0577.png',
    './img/M-0582.png',
    './img/M-0586.png',
    './img/M-0587.png',
    './img/M-0588.png',
    './img/M-0589.png',
    './img/M-0590.png',
    './img/M-0592.png',
    './img/M-0593.png',
    './img/M-0594.png',
    './img/M-0595.png',
    './img/M-0596.png',
    './img/M-0597.png',
    './img/M-0598.png',
    './img/M-0599.png',
    './img/M-0600.png', 
    './img/M-0601.png',
    './img/M-0602.png',
    './img/M-0603.png',
    './img/M-0604.png',
    './img/M-0605.png',
    './img/M-0606.png',
    './img/M-0607.png',
    './img/M-0608.png',
    './img/M-0609.png',
    './img/M-0610.png',
    './img/M-0611.png',
    './img/M-0612.png',
    './img/M-0613.png',
    './img/M-0614.png',
    './img/M-0615.png',
    './img/M-0616.png',
    './img/M-0617.png',
    './img/M-0618.png',
    './img/M-0619.png',
    './img/M-0620.png',
    './img/M-0622.png',
    './img/M-0623.png',
    './img/M-0625.png',
    './img/M-0627.png',
    './img/M-0628.png',
    './img/M-0629.png',
    './img/M-0630.png',
    './img/M-0631.png',
    './img/M-0632.png',
    './img/M-0633.png',
    './img/M-0634.png',
    './img/M-0635.png',
    './img/M-0636.png',
    './img/M-0637.png',
    './img/M-0638.png',
    './img/M-0639.png',
    './img/M-0640.png',
    './img/M-0642.png',
    './img/M-0643.png',
    './img/M-0644.png',
    './img/M-0645.png',
    './img/M-0646.png',
    './img/M-0647.png',
    './img/M-0648.png',
    './img/M-0650.png',
    './img/M-0651.png',
    './img/M-0652.png',
    './img/M-0654.png',
    './img/M-0655.png',
    './img/M-0656.png',
    './img/M-0657.png',
    './img/M-0658.png',
    './img/M-0659.png',
    './img/M-0662.png',
    './img/M-0664.png',
    './img/M-0665.png',
    './img/M-0666.png',
    './img/M-0667.png',
    './img/M-0668.png',
    './img/M-0669.png',
    './img/M-0670.png',
    './img/M-0672.png',
    './img/M-0673.png',
    './img/M-0674.png',
    './img/M-0675.png',
    './img/M-0676.png',
    './img/M-0677.png',
    './img/M-0678.png',
    './img/M-0680.png',
    './img/M-0681.png',
    './img/M-0682.png',
    './img/M-0683.png',
    './img/M-0684.png',
    './img/M-0685.png',
    './img/M-0686.png',
    './img/M-0687.png',
    './img/M-0688.png',
    './img/M-0689.png',
    './img/M-0690.png',
    './img/M-0691.png',
    './img/M-0692.png',
    './img/M-0693.png',
    './img/M-0694.png',
    './img/M-0695.png',
    './img/M-0696.png',
    './img/M-0697.png',
    './img/M-0698.png',
    './img/M-0699.png',
    './img/M-0700.png',
    './img/M-0701.png',
    './img/M-0702.png',
    './img/M-0703.png',
    './img/M-0704.png',
    './img/M-0710.png',
    './img/M-0712.png',
    './img/M-0713.png',
    './img/M-0714.png',
    './img/M-0715.png',
    './img/M-0716.png',
    './img/M-0717.png',
    './img/M-0719.png',
    './img/M-0720.png',
    './img/M-0721.png',
    './img/M-0722.png',
    './img/M-0723.png',
    './img/M-0724.png',
    './img/M-0725.png',
    './img/M-0728.png',
    './img/M-0729.png',
    './img/M-0730.png',
    './img/M-0731.png',
    './img/M-0732.png',
    './img/M-0733.png',
    './img/M-0734.png',
    './img/M-0735.png',
    './img/M-0736.png',
    './img/M-0737.png',
    './img/M-0738.png',
    './img/M-0739.png',
    './img/M-0740.png',
    './img/M-0741.png',
    './img/M-0742.png',
    './img/M-0743.png',
    './img/M-0744.png',
    './img/M-0746.png',
    './img/M-0747.png',
    './img/M-0749.png',
    './img/M-0750.png',
    './img/M-0751.png',
    './img/M-0752.png',
    './img/M-0753.png',
    './img/M-0754.png',
    './img/M-0755.png',
    './img/M-0756.png',
    './img/M-0757.png',
    './img/M-0758.png',
    './img/M-0759.png',
    './img/M-0760.png',
    './img/M-0761.png',
    './img/M-0762.png',
    './img/M-0763.png',
    './img/M-0764.png',
    './img/M-0770.png',
    './img/M-0775.png',
    './img/M-0776.png',
    './img/M-0777.png',
    './img/M-0778.png',
    './img/M-0780.png',
    './img/M-0781.png',
    './img/M-0782.png',
    './img/M-0789.png',
    './img/M-0791.png',
    './img/M-0792.png',
    './img/M-0793.png',
    './img/M-0794.png',
    './img/M-0795.png',
    './img/M-0796.png',
    './img/M-0797.png',
    './img/M-0798.png',
    './img/M-0799.png',
    './img/M-0801.png',
    './img/M-0802.png',
    './img/M-0803.png',
    './img/M-0804.png',
    './img/M-0805.png',
    './img/M-0807.png',
    './img/M-0808.png',
    './img/M-0809.png',
    './img/M-0810.png',
    './img/M-0811.png',
    './img/M-0812.png',
    './img/M-0813.png',
    './img/M-0814.png',
    './img/M-0815.png',
    './img/M-0816.png',
    './img/M-0817.png',
    './img/M-0818.png',
    './img/M-0819.png',
    './img/M-0820.png',
    './img/M-0821.png',
    './img/M-0822.png',
    './img/M-0823.png',
    './img/M-0824.png',
    './img/M-0825.png',
    './img/M-0826.png',
    './img/M-0827.png',
    './img/M-0828.png',
    './img/M-0829.png',
    './img/M-0830.png',
    './img/M-0831.png',
    './img/M-0832.png',
    './img/M-0833.png',
    './img/M-0834.png',
    './img/M-0835.png',
    './img/M-0836.png',
    './img/M-0837.png',
    './img/M-0838.png',
    './img/M-0839.png',
    './img/M-0840.png',
    './img/M-0841.png',
    './img/M-0842.png',
    './img/M-0844.png',
    './img/M-0847.png',
    './img/M-0848.png',
    './img/M-0849.png',
    './img/M-0850.png',
    './img/M-0851.png',
    './img/M-0852.png',
    './img/M-0853.png',
    './img/M-0854.png',
    './img/M-0855.png',
    './img/M-0856.png',
    './img/M-0857.png',
    './img/M-0858.png',
    './img/M-0859.png',
    './img/ME-0008.png',
    './img/ME-0009.png',
    './img/ME-0010.png',
    './img/ME-0011.png',
    './img/ME-0012.png',
    './img/ME-0013.png',
    './img/ME-0014.png',
    './img/ME-0015.png',
    './img/G-0012.png',
    './img/G-0014.png',
    './img/G-0018.png',
    './img/G-0020.png',
    './img/G-0022.png',
    './img/G-0023.png',
    './img/G-0025.png',
    './img/G-0029.png',
    './img/G-0030.png',
    './img/G-0031.png',
    './img/G-0036.png',
    './img/G-0037.png',
    './img/G-0038.png',
    './img/G-0048.png',
    './img/G-0049.png',
    './img/G-0050.png',
    './img/G-0057.png',
    './img/G-0058.png',
    './img/G-0059.png',
    './img/G-0065.png',
    './img/G-0066.png',
    './img/G-0071.png',
    './img/G-0072.png',
    './img/G-0073.png',
    './img/G-0074.png',
    './img/G-0076.png',
    './img/G-0078.png',
    './img/G-0079.png',
    './img/G-0080.png',
    './img/G-0081.png',
    './img/G-0082.png',
    './img/G-0085.png',
    './img/G-0086.png',
    './img/G-0093.png',
    './img/G-0094.png',
    './img/G-0096.png',
    './img/G-0097.png', 
    './img/G-0101.png',
    './img/G-0102.png',
    './img/J-0001.png',
    './img/J-0006.png',
    './img/J-0012.png',
    './img/J-0013.png',
    './img/J-0015.png',
    './img/J-0070.png',
    './img/J-0129.png',
    './img/J-0130.png',
    './img/J-0234.png',
    './img/J-0301.png',
    './img/J-0302.png',
    './img/J-0303.png',
    './img/J-0304.png',
    './img/J-0305.png',
    './img/J-0306.png',
    './img/J-0307.png',
    './img/J-0308.png',
    './img/J-0310.png',
    './img/J-0311.png',
    './img/J-0312.png',
    './img/J-0313.png',
    './img/J-0314.png',
    './img/J-0315.png',
    './img/J-0316.png',
    './img/J-0320.png',
    './img/J-0321.png',
    './img/J-0323.png',
    './img/J-0324.png',
    './img/J-0325.png',
    './img/J-0326.png',
    './img/J-0327.png',
    './img/J-0328.png',
    './img/J-0329.png',
    './img/J-0330.png',
    './img/J-0331.png',
    './img/J-0332.png',
    './img/J-0333.png',
    './img/J-0334.png',
    './img/J-0335.png',
    './img/J-0336.png',
    './img/J-0337.png',
    './img/J-0338.png',
    './img/J-0339.png',
    './img/J-0340.png',
    './img/J-0341.png',
    './img/J-0342.png',
    './img/J-0343.png',
    './img/J-0351.png',
    './img/J-0353.png',
    './img/J-0354.png',
    './img/J-0355.png',
    './img/J-0356.png',
    './img/J-0357.png',
    './img/J-0358.png',
    './img/J-0359.png',
    './img/J-0360.png',
    './img/J-0362.png',
    './img/J-0363.png',
    './img/J-0364.png',
    './img/J-0380.png',
    './img/J-0381.png',
    './img/J-0383.png',
    './img/J-0385.png',
    './img/W-0055.png',
    './img/W-0057.png',
    './img/W-0059.png',
    './img/W-0060.png',
    './img/W-0069.png',
    './img/W-0070.png',
    './img/W-0210.png',
    './img/W-0216.png',
    './img/W-0225.png',
    './img/W-0227.png',
    './img/W-0234.png',
    './img/W-0235.png',
    './img/W-0236.png',
    './img/W-0237.png',
    './img/W-0241.png',
    './img/W-0243.png',
    './img/W-0244.png',
    './img/W-0245.png',
    './img/W-0246.png',
    './img/W-0247.png',
    './img/W-0248.png'     
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})
